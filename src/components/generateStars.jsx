import StarYellow from '../assets/productview/star-yellow.svg';
import Star from '../assets/productview/star.svg';

const GenerateStars = ({ rating }) => {
  const stars = [];
  const fullStars = Math.floor(rating);

  for (let i = 0; i < fullStars; i++) {
    stars.push(<img key={i} src={StarYellow} alt="Star" />);
  }

  const remainingStars = 5 - fullStars;

  for (let i = 0; i < remainingStars; i++) {
    stars.push(<img key={fullStars + i} src={Star} alt="Star" />);
  }

  return <div className='flex gap-0.5'>{stars}</div>
};
 
export default GenerateStars;