import PropTypes from "prop-types";

const Section = ({ title, titleAlign="left", link, children }) => {
  const titleClass = `text-gray text-2xl ${titleAlign === 'center' ? 'text-center' : 'text-left'}`;
  const linkClass = 'text-primary text-lg'
  return (  
    <section>
      <div className= {`flex ${titleAlign === 'center' ? 'justify-center' : 'justify-between'} items-center`}>
        <h2 className={titleClass}>{title}</h2>
        {link && (
          <a href={link.href} className={linkClass}>
            {link.text}
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