import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import Table from "../../components/Table/Table";
import TableCol from "../../components/Table/TableCol";

import ErrorPage from "../ErrorPage/ErrorPage";

import { removeDoctor } from "../../store/slices/DoctorSlice";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./dashControl.module.scss";

function DashDoctors() {
  useSetTitle("doctors dashboard");

  const { loading, err, doctors } = useSelector((state) => state.doctors);
  const dispatch = useDispatch();

  return loading ? (
    <div className="loading"></div>
  ) : err ? (
    <ErrorPage />
  ) : (
    <>
      <section className={styles.content}>
        <DashHeadSec title="doctors" />
        <div className={styles["sec-body"]}>
          <DashInfoSection
            href="/add-new-doctor"
            number={doctors.length}
            isReverse={true}
          />
          <div className={styles.control}>
            <Table titles={["title", "specialty", "modifyDate"]}>
              {doctors.map(({ id, name, specialty, creationAt }, index) => (
                <TableCol
                  key={id}
                  id={++index}
                  title={name}
                  category={specialty}
                  modifyDate={new Date(creationAt).toDateString()}
                >
                  <span>
                    {/* <Link to={`/dashboard/doctors/edit/${id}`}> */}
                    <Link to={`/dashboard/doctors/${id}/edit`}>
                      <i className={`${styles["f-icon"]} fa-solid fa-pencil`} />
                    </Link>
                    <Link to={`/dashboard/doctors/${id}`}>
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
                            dispatch(removeDoctor(id));
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
      </section>
      <Outlet />
    </>
  );
}

export default DashDoctors;
