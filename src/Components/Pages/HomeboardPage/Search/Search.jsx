export default function Search({text, textModifier, customClass, placeholder}){

    function handleChange(event){
        textModifier(event.target.value)
    }

    const searchBoxClass = (customClass || "fixed w-14 h-5 top-0.5 right-0.5 tablet:w-32") + " focus-within:border-2 focus-within:border-pink-800 focus-within:rounded-lg"
    const placeholderValue = placeholder || "Search..."

    return (
        <div className={searchBoxClass}>
            <input type="text" placeholder={placeholderValue} className="text-xxs m-auto block w-full h-full tablet:text-xs
             text-center rounded border-pink-800 border-x-2 border-y-2" value={text} onChange={handleChange}/>
        </div>
    )

}