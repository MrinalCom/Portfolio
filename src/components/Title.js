export default function Title(props) {
  return (
    <div
      className={`fixed top-[calc(100%-64vw)] md:top-[calc(100%-25vw)] rotate-90 sm:rotate-0 ${props.left} sm:left-60 text-[25vw] sm:text-10xl text-titleColor opacity-50 z-[-1] font-sans`}
    >
      <span>{props.title}</span>
    </div>
  );
}
