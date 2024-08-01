import Section from "./Section";

const ExamplePage = () => {
  return (  
    <div>
      <Section
        title="Products"
        titleAlign="left"
        link={{
          text: "Show More",
          href: "#"
        }}
        >
        <p>Product 1</p>
        <p>Product 2</p>
      </Section>

      <Section
        title="Gallery"
        titleAlign="Center"
        >
        <p>Image 1</p>
        <p>Image 2</p>
      </Section>
    </div>
  );
}
 
export default ExamplePage;