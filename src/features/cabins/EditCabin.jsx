import React from "react";

function EditCabin({ cabin, setIsModalOpen }) {
  const [showEditForm, setShowEditForm] = React.useState(false);
  return (
    <>
      <Button onClick={() => setShowEditForm(!showEditForm)}>Edit</Button>
      {showEditForm && (
        <Modal onClose={() => setIsModalOpen(false)}>
          {" "}
          <CreateCabinForm
            onClose={() => setShowEditForm(false)}
            cabin={cabin}
          />
        </Modal>
      )}
    </>
  );
}

export default EditCabin;
