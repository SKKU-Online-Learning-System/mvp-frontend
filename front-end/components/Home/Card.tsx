interface CardProps {
  title: string;
  author: string;
}

const Card = ({title, author}: CardProps) => (
  <div style = {{width: '22%'}} >
    <img style = {{width: '100%'}} src='images/card_img.png'/>
    <b>{title}</b>
    <p>{author}</p>
  </div>
);

export default Card;