import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import Table from "../../components/Table/Table";
import TableCol from "../../components/Table/TableCol";

import useSetTitle from "../../hooks/useSetTitle";

import { removeMedicine } from "../../store/slices/medicineSlice";

import styles from "./dashControl.module.scss";

function DashMedicines() {
  useSetTitle("doctors medicines");

  const { medicines } = useSelector((state) => state.medicines);
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles.content}>
        <div>
          <DashHeadSec title="medicines" />
          <div className={styles["sec-body"]}>
            <DashInfoSection
              href="/add-new-medicine"
              number={medicines.length}
              isReverse={true}
            />
            <div className={styles.control}>
              <Table titles={["title", "category", "modifyDate"]}>
                {medicines.map(({ id, name, category, creationAt }, index) => (
                  <TableCol
                    key={id}
                    id={++index}
                    title={name}
                    category={category}
                    modifyDate={new Date(creationAt).toDateString()}
                  >
                    <span>
                      {" "}
                      {/* <Link to={`/dashboard/medicines/edit/${id}`}> */}
                      <Link to={`/dashboard/medicines/${id}/edit`}>
                        <i
                          className={`${styles["f-icon"]} fa-solid fa-pencil`}
                        />
                      </Link>
                      <Link to={`/dashboard/medicines/${id}`}>
                        <i className={`${styles["f-icon"]} fa-solid fa-eye`} />
                      </Link>
                      <button
                        onClick={() => {
                          Swal.fire({
                            title: "Are you sure?",
                            text: "You won't be able to revert this!",
                            icon: "warning",
                            showCancelButton: true,
                            confirmButtonColor: "#3085d6",
                            cancelButtonColor: "#d33",
                            confirmButtonText: "Yes, delete it!",
                          }).then((result) => {
                            if (result.isConfirmed) {
                              dispatch(removeMedicine(id));
                              Swal.fire(
                                "Deleted!",
                                "Your file has been deleted.",
                                "success"
                              );
                            }
                          });
                        }}
                        className={styles.danger}
                      >
                        <i
                          className={`${styles["f-icon"]} fa-solid fa-trash-can`}
                        />
                      </button>
                    </span>
                  </TableCol>
                ))}
              </Table>
            </div>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default DashMedicines;
