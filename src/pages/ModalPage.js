import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        I Accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Hello there</p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button primary onClick={handleClick}>
        {" "}
        Open Modal
      </Button>
      {showModal && modal}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna
        quis augue porttitor consequat. In euismod semper est sit amet
        dignissim. Vivamus blandit, odio sit amet commodo interdum, tortor felis
        interdum eros, nec feugiat nibh tortor a urna. Nam vel auctor augue.
        Integer vitae odio pretium, ullamcorper mauris eu, mollis nisi.
        Vestibulum at mauris turpis. Quisque nec nulla volutpat magna porttitor
        tristique efficitur vel purus.
      </p>
    </div>
  );
}
export default ModalPage;
