export default function SectionLink({ section, children, ...props }) {
  return <a href={`#${section}`} {...props}>{children}</a>;
}
