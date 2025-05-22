import { Figure, Form } from "react-bootstrap";
import TextInputWithLabel from "../../components/TextInputWithLabel";
import MyButton from "../../components/Button";
import { config } from "../../configs";

export default function TalentsForm({
  form,
  handleChange,
  handleSubmit,
  loading,
  edit,
}) {
  console.log("cek form", form);
  console.log(
    "${config.api_image_dev}${form.image}",
    `${config.api_image_dev}${form.image}`
  );
  return (
    <Form>
      <TextInputWithLabel
        placeholder={"Masukan Nama Talents"}
        label={"Nama Talents"}
        name="name"
        value={form.name}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan Role Talents"}
        label={"Role Talents"}
        name="role"
        value={form.role}
        type="text"
        onChange={handleChange}
      />
      <TextInputWithLabel
        placeholder={"Masukan Image Talents"}
        label={"Image Talents"}
        name="image"
        type="file"
        onChange={handleChange}
      />

      {form.image !== "" && (
        <div>
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="Image talents"
              src={`${config.api_image_dev}${form.image}`}
            />
            <Figure.Caption>Perview image talents</Figure.Caption>
          </Figure>
        </div>
      )}

      <MyButton action={handleSubmit} variant="primary" loading={loading}>
        {edit ? "Ubah" : "Simpan"}
      </MyButton>
    </Form>
  );
}
