import { getDocs, getDoc, collection, doc } from "firebase/firestore";
import { db } from "./firebase";

//get Jetour services
export async function getJetourServices() {
  try {
    const docRef = doc(db, "Jetour", "Services");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return data.services || [];
    } else {
      console.warn("Jetour Services document not found!");
      return [];
    }
  } catch (error) {
    console.error("Error fetching Jetour Services:", error);
    return [];
  }
} 

// get Jetour safety
export const getJetourSafety = async () => {
  try {
    const docRef = doc(db, "Jetour", "Safety");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.warn("No such safety document!");
      return {};
    }
  } catch (error) {
    console.error("Error fetching Jetour Safety section:", error);
    return {};
  }
};

// get Jetour comfort
export async function getJetourComfort() {
  try {
    const docRef = doc(db, "Jetour", "Comfort");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      console.warn("Comfort document not found!");
      return {};
    }
  } catch (error) {
    console.error("Error fetching Jetour Comfort section:", error);
    return {};
  }
}


// get hero data
export async function getJetourHero() {
  try {
    const docRef = doc(db, "Jetour", "Hero");
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        title: data.title || "",
        highlight: data.highlight || "",
        subtitle: data.subtitle || "",
        image: data.image || "",
      };
    } else {
      console.warn("Jetour Hero document not found!");
      return { title: "", highlight: "", subtitle: "", image: "" };
    }
  } catch (error) {
    console.error("Error fetching Jetour Hero:", error);
    return { title: "", highlight: "", subtitle: "", image: "" };
  }
}

// Get all car models
export const getCarModels = async () => {
  const snapshot = await getDocs(collection(db, "cars"));
  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      name: data.name,
      img: data.img,
      topSpeed: data.topSpeed,
      displacement: data.displacement,
      maxTorque: data.maxTorque,
      power: data.power,
      description: data.description,
      colorOptions: data.colorOptions || [],
      modelImages: data.modelImages || [],
    };
  });
};

// Get faq
export const getJetourFaq = async () => {
  try {
    const faqRef = doc(db, "Jetour", "Faq");
    const faqSnap = await getDoc(faqRef);
    if (faqSnap.exists()) {
      return faqSnap.data();
    } else {
      console.warn("No FAQ document found.");
      return { image: "", faqItems: [] };
    }
  } catch (error) {
    console.error("Error fetching FAQ data:", error);
    return { image: "", faqItems: [] };
  }
};

// Get social media icons from a specific document
export const getSocialMediaIcons = async () => {
  try {
    const snapshot = await getDoc(doc(db, "footer", "socialMedia"));
    const data = snapshot.data();

    return data?.icons?.map(icon => ({
      src: icon.src,
      alt: icon.alt,
      href: icon.href
    })) || [];

  } catch (error) {
    console.error("Error fetching social media icons:", error);
    return [];
  }
};


export const getContactInfo = async () => {
  try {
    const docRef = doc(db, "footer", "address");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        email: data.email?.trim() || "",
        phone: data.phone || "",
        location: data.location || "",
      };
    } else {
      console.warn("No address document found in Firestore.");
      return {};
    }
  } catch (error) {
    console.error("Error fetching contact info:", error);
    return {};
  }
};

// Fetch and return all events sorted by date (newest first)
export const getAllEvents = async () => {
  try {
    const snapshot = await getDocs(collection(db, "events"));

    const events = snapshot.docs.map(doc => {
      const data = doc.data();
      const [month, day, year] = data.date.split("-").map(Number);
      const parsedDate = new Date(year, month - 1, day); // correct date parsing

      return {
        id: doc.id,
        title: data.title || "",
        description: data.description || "",
        date: data.date,
        parsedDate,
        time: data.time || "",
        location: data.location || "",
        subLocation: data.subLocation || "",
        images: data.images || [],
      };
    });

    // Sort by parsedDate in descending order (newest first)
    return events.sort((a, b) => b.parsedDate - a.parsedDate);

  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};
