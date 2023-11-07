import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import Table from "../../components/Table/Table";
import TableCol from "../../components/Table/TableCol";

import useSetTitle from "../../hooks/useSetTitle";

import { removeHospital } from "../../store/slices/hospitalSlice";

import styles from "./dashControl.module.scss";

function DashHospitals() {
  useSetTitle("hospitals dashboard");

  const { hospitals } = useSelector((state) => state.hospitals);
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles.content}>
        <div>
          <DashHeadSec title="hospitals" />
          <div className={styles["sec-body"]}>
            <DashInfoSection
              href="/add-new-hospital"
              number={hospitals.length}
              isReverse={true}
            />
            <div className={styles.control}>
              <Table titles={["title", "modifyDate"]}>
                {hospitals.map(({ id, name, creationAt }, index) => (
                  <TableCol
                    key={id}
                    id={++index}
                    title={name}
                    modifyDate={new Date(creationAt).toDateString()}
                  >
                    <span>
                      <Link to={`/dashboard/hospitals/${id}/edit`}>
                        <i
                          className={`${styles["f-icon"]} fa-solid fa-pencil`}
                        />
                      </Link>
                      <Link to={`/dashboard/hospitals/${id}`}>
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
                              dispatch(removeHospital(id));
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

export default DashHospitals;
