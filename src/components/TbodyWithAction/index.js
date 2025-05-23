import React from "react";
import { Image, Spinner } from "react-bootstrap";
import { config } from "../../configs";
import moment from "moment";
import MyButton from "../Button";
import { useNavigate } from "react-router";

function TbodyWithAction({
  status,
  data,
  display,
  editUrl,
  deleteAction,
  customAction,
  actionNotDisplay,
}) {
  const navigate = useNavigate();
  return (
    <>
      <tbody>
        {status === "process" ? (
          <tr>
            <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
              <div className="flex items-center justify-center">
                <Spinner animation="border" variant="primary" />
              </div>
            </td>
          </tr>
        ) : data.length ? (
          data.map((data, index) => {
            return (
              <tr key={index}>
                {Object.keys(data).map(
                  (key) =>
                    display.indexOf(key) > -1 && (
                      <td key={key}>
                        {key === "avatar" ? (
                          <Image
                            height={40}
                            width={40}
                            roundedCircle
                            src={`${config.api_image_dev}/${data[key]}`}
                          />
                        ) : key === "date" ? (
                          moment(data[key]).format("DD-MM-YYYY, h:mm:ss a")
                        ) : (
                          data[key]
                        )}
                      </td>
                    )
                )}
                {!actionNotDisplay && (
                  <td>
                    {customAction && customAction(data._id, data.statusEvent)}
                    {editUrl && (
                      <MyButton
                        variant="success"
                        size={"sm"}
                        action={() => navigate(`${editUrl}/${data._id}`)}
                      >
                        Edit
                      </MyButton>
                    )}
                    {deleteAction && (
                      <MyButton
                        className={"mx-2"}
                        variant="danger"
                        size={"sm"}
                        action={() => deleteAction(data._id)}
                      >
                        Hapus
                      </MyButton>
                    )}
                  </td>
                )}
              </tr>
            );
          })
        ) : (
          <tr>
            <td colSpan={display.length + 1} style={{ textAlign: "center" }}>
              Tidak Ditemukan Data
            </td>
          </tr>
        )}
      </tbody>
    </>
  );
}

export default TbodyWithAction;
