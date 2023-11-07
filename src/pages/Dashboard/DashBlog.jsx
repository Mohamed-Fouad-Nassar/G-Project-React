import Swal from "sweetalert2";
import { Link, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Table from "../../components/Table/Table";
import TableCol from "../../components/Table/TableCol";
import DashHeadSec from "../../components/DashHeadSec/DashHeadSec";
import DashInfoSection from "../../components/DashInfoSection/DashInfoSection";

import useSetTitle from "../../hooks/useSetTitle";

import { removeArticle } from "../../store/slices/articleSlice";

import styles from "./dashControl.module.scss";

function DashBlog() {
  useSetTitle("blog dashboard");

  const { articles } = useSelector((state) => state.articles);
  const dispatch = useDispatch();

  return (
    <>
      <section className={styles.content}>
        <div>
          <DashHeadSec title="blog" />
          <div className={styles["sec-body"]}>
            <DashInfoSection
              href="/add-new-article"
              number={articles.length}
              isReverse={true}
            />
            <div className={styles.control}>
              <Table titles={["title", "modifyDate"]}>
                {articles.map(({ id, title, creationAt }, index) => (
                  <TableCol
                    key={id}
                    id={++index}
                    title={title}
                    modifyDate={new Date(creationAt).toDateString()}
                  >
                    <span>
                      <Link to={`/dashboard/blog/${id}/edit`}>
                        <i
                          className={`${styles["f-icon"]} fa-solid fa-pencil`}
                        />
                      </Link>
                      <Link to={`/dashboard/blog/${id}`}>
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
                              dispatch(removeArticle(id));
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

export default DashBlog;
