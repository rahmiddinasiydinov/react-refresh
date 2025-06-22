import './CoreConcepts.css'

export default function CoreConcept({ title, description, image }) {
  console.log('CORE CONCEPTS');
  
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
