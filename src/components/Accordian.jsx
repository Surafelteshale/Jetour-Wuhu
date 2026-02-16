import { ChevronDown } from "lucide-react"
import { createContext, useContext, useEffect, useState } from "react"

const AccordianContext = createContext();

const Accordian = ({children, value, onChange, ...props}) => {
  const [selected, setSelected] = useState(value)

  useEffect(() => {
    onChange?.(selected)
  }, [selected])

  return (
    <ul {...props}>
      <AccordianContext.Provider value={{ selected, setSelected   }}>
        {children}
      </AccordianContext.Provider>
    </ul>
  )
}

export default Accordian


export function AccordianItem({children, value, trigger, ...props}) {
  const {selected, setSelected} = useContext(AccordianContext)
  const open = selected === value

  return (
    <li className="border-b" {...props}>
      <header
        role="button"
        onClick={() => setSelected(open ? null : value)}
        className="flex justify-between items-center p-4 font-semibold cursor-pointer"
      >
        {trigger}
        <ChevronDown
          size={16}
          className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
        />
      </header>
      <div
        className="overflow-hidden transition-[height] duration-300"
        style={{ height: open ? 'auto' : 0 }}
      >
        <div className="p-2 pb-4 text-gray-600">{children}</div>
      </div>
    </li>
  );
}