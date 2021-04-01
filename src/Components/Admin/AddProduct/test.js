const [message, setMessage] = useState("");
  const [image, setImage] = useState(null);
  const [values, setValues] = useState({
    product: "",
    weight: "",
    price: "",
  });

  const formClear = () => {
    setValues({
      product: "",
      weight: "",
      price: "",
    });
  };

  const handleChange = (e) => {
    const value = { ...values };
    value[e.target.name] = e.target.value;
    setValues(value);
  };
  const handleImage = (e) => {
    const imageData = new FormData();
    imageData.set("key", "b5b8f2f92d6b141a29f44de2a89cdbc7");
    imageData.append("image", e.target.files[0]);
    axios.post(https://api.imgbb.com/1/upload, imageData).then((result) => {
      setImage(result.data.data.display_url);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    formClear();
    const fieldData = { ...values };
    fieldData.imageUrl = image;
    fetch(http://localhost:4040/products, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(fieldData),
    })
      .then((result) => {
        console.log(result);
        setMessage("Product Insert Successfully !");
      })
      .catch((err) => {
        console.log(err);
      });
  };