import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";
import Table from "../../components/Table/Table";
import TableCol from "../../components/Table/TableCol";

import ErrorPage from "../ErrorPage/ErrorPage";

import { removeUser } from "../../store/slices/usersSlice";

import useSetTitle from "../../hooks/useSetTitle";

import styles from "./dashControl.module.scss";

function DashUsers() {
  useSetTitle("users dashboard");

  const { loading, err, users } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  return loading ? (
    <div className="loading"></div>
  ) : err ? (
    <ErrorPage />
  ) : (
    <>
      <section className={styles.content}>
        <DashHeadSec title="users" />
        <div className={styles["sec-body"]}>
          <DashInfoSection
            href="#add-new-user"
            number={users.length}
            isReverse={true}
          />
          <div className={styles.control}>
            <Table titles={["email", "name", "modifyDate", "role"]}>
              {users.map(
                (
                  { id, firstName, lastName, email, role, creationAt },
                  index
                ) => (
                  <TableCol
                    key={id}
                    id={++index}
                    title={email}
                    newFelid={role}
                    category={`${firstName} ${lastName}`}
                    modifyDate={new Date(creationAt).toDateString()}
                  >
                    <span>{role}</span>
                    <span>
                      {/* <Link to={`/dashboard/users/edit/${id}`}> */}
                      <Link to={`/dashboard/users/${id}/edit`}>
                        <i
                          className={`${styles["f-icon"]} fa-solid fa-pencil`}
                        />
                      </Link>
                      <Link to={`/dashboard/users/${id}`}>
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
                              dispatch(removeUser(id));
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
                )
              )}
            </Table>
          </div>
        </div>
      </section>
      <Outlet />
    </>
  );
}

export default DashUsers;
