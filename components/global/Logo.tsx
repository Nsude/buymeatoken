import LogoTokenIcon from "../../public/icons/LogoTokenIcon";


export default function Logo() {
  return (
    <div className=" flex items-center gap-x-2">
      <LogoTokenIcon size={22} color="" />
      <h3 className="font-medium text-[1rem]">buymeatoken</h3> 
    </div>
  )
}