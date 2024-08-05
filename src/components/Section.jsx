import PropTypes from "prop-types";

const Section = ({ title, titleAlign="left", link, children }) => {
  const titleClass = `text-dark-gray-2 font-bold pb-2 md:pl-0 md:py-4 md:text-xl ${titleAlign === 'center' ? 'text-center' : 'text-left'}`;
  const linkClass = 'text-primary text-sm md:text-base'
  return (  
    <section className="mb-4 md:mb-8">
      <div className= {`flex px-1 ${titleAlign === 'center' ? 'justify-center' : 'justify-between'} items-center`}>
        <h2 className={titleClass}>{title}</h2>
        {link && (
          <a href={link.href} className={linkClass}>
            {link.text} &rarr;
          </a>
        )}
      </div>
      <div>
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  titleAlign: PropTypes.oneOf(['left', 'center']),
  link: PropTypes.shape({
    text:  PropTypes.string,
    href: PropTypes.string
  }),
  children: PropTypes.node
}
 
export default Section;