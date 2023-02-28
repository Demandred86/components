import Accordion from "../components/Accordion";
function AccordionPage() {
  const items = [
    {
      id: "4hergs",
      label: "Can I use React on a project?",
      content: " Yes you can",
    },
    {
      id: "sdkgne",
      label: "Can I use as a question?",
      content: " It depends!",
    },
    { id: "sdlkgjq4", label: "Wooow", content: " Cheers!" },
  ];
  return <Accordion items={items} />;
}
export default AccordionPage;
