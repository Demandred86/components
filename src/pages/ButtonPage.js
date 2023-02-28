import Button from "../components/Button";
import { GoBell, GoDatabase } from "react-icons/go";
function ButtonPage() {
  const handleClick = () => console.log(`click`);
  return (
    <div>
      <div>
        <Button success className="mb-5" rounded onClick={handleClick}>
          <GoBell />
          Click Here
        </Button>
      </div>
      <div>
        <Button danger outline className="mb-5">
          <GoDatabase />
          Buy Now!
        </Button>
      </div>

      <div>
        <Button warning>Click!</Button>
      </div>

      <div>
        <Button secondary outline>
          Hello!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Test me!
        </Button>
      </div>
    </div>
  );
}
export default ButtonPage;
