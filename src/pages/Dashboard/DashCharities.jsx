import Swal from "sweetalert2";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../components/Table/Table";
import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import TableCol from "../../components/Table/TableCol";

import useSetTitle from "../../hooks/useSetTitle";

import { removeCharity } from "../../store/slices/charitySlice";

import styles from "./dashControl.module.scss";

function DashCharities() {
  useSetTitle("charities dashboard");

  const { charities } = useSelector((state) => state.charities);
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles.content}>
        <div>
          <DashHeadSec title="charities" />
          <div className={styles["sec-body"]}>
            <DashInfoSection
              href="/add-new-charity"
              number={charities.length}
              isReverse={true}
            />
            <div className={styles.control}>
              <Table titles={["name", "modifyDate"]}>
                {charities.map(({ id, name, creationAt }, index) => (
                  <TableCol
                    key={id}
                    id={++index}
                    title={name}
                    modifyDate={new Date(creationAt).toDateString()}
                  >
                    <span>
                      <Link to={`/dashboard/charities/${id}/edit`}>
                        <i
                          className={`${styles["f-icon"]} fa-solid fa-pencil`}
                        />
                      </Link>
                      <Link to={`/dashboard/charities/${id}`}>
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
                              dispatch(removeCharity(id));
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

export default DashCharities;
