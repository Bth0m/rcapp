"use client";
import { useState } from "react";
import DataTable from "react-data-table-component";
import { useQuery } from "react-query";

import LoginAdmin from "../components/loginAdmin";
import EditEvent from "../components/editEvent";
import EditIcon from "../components/editIcon";
import Modal from "../components/modal";
import { getEvents } from "../api/services";
import { COLUMNS } from "../constants/admin";

const Admin = () => {
  const { data, refetch } = useQuery("markers", () => {
    const res = getEvents().then(
      (data) => Array.isArray(data) && data.sort((a, b) => a.id - b.id)
    );
    return res;
  });
  const [modalInformation, setModalInformation] = useState(null);
  const [userLogged, setUserLogged] = useState(false);

  const handleClose = () => setModalInformation(null);

  const customColumns = [
    ...COLUMNS,
    {
      name: "Actions",
      cell: (row) => {
        return (
          <button
            onClick={() => {
              setModalInformation(row);
            }}
          >
            <EditIcon />
          </button>
        );
      },
    },
  ];

  return (
    <div>
      <DataTable
        title="Events"
        columns={customColumns}
        data={data}
        pagination
      />
      {console.log({ modalInformation })}
      <Modal
        isVisible={!!modalInformation || !userLogged}
        handleClose={handleClose}
      >
        {!userLogged && <LoginAdmin handleSuccess={setUserLogged} />}
        {userLogged && modalInformation && (
          <EditEvent
            country={modalInformation.Country}
            city={modalInformation.City}
            id={modalInformation.id}
            comment={modalInformation.comment}
            refetch={refetch}
            handleClose={handleClose}
          />
        )}
      </Modal>
    </div>
  );
};
export default Admin;
