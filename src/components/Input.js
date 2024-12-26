export default function Input(props) {
  return (
    <>
      <div className="relative z-0 w-full mb-5 group">
        <input
          type="text"
          name={props.label.toLowerCase()}
          id={props.label.toLowerCase()}
          value={props.value}
          onChange={props.onValueChange}
          className="block py-2.5 px-0 w-full text-lg text-gray-900 bg-transparent border-0 border-b dark:border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 focus:border-highlight2 dark:focus:border-highlight focus:outline-none focus:ring-0 peer"
          placeholder=" "
          required
        />
        <label
          htmlFor={props.label.toLowerCase()}
          className="peer-focus:font-medium absolute text-lg text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-highlight2 peer-focus:dark:text-highlight peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          {props.label}
        </label>
      </div>
    </>
  );
}

export function TextArea(props) {
  return (
    <textarea
      type="text"
      name="message"
      id="message"
      value={props.value}
      onChange={props.onValueChange}
      placeholder="Write your message here..."
      className="peer h-full min-h-[100px] w-full resize-none border-b border-gray-600 bg-transparent pt-4 pb-1.5 text-lg font-normal text-fontColor2 dark:text-fontColor outline outline-0 transition-all placeholder-shown:border-blue-gray-600 focus:border-highlight2 dark:focus:border-highlight focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
      required
    />
  );
}
