import React, { useState } from "react";

function Sviper() {
  const [img, setImg] = useState(false);

  let a = () => {
    alert("+998 97 033 95 15");
  };
  let eror = [
    {
      img: "https://thumbs.dreamstime.com/b/wonder-full-village-india-wonder-full-village-indian-garass-170291633.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgO5lYOT4AudFo9apkW_QtEIB535pwuiV1OZf9xzRbbPLDTEHuSfgzmk1Q98VdN-1UBaA&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdOdxMEvYh7QmXlmJAaA67w9wZ8tHAmcAfNQRv6vwiqA7iuoEzbO_ii5atTHVyxWgL7R8&usqp=CAU",
    },
    {
      img: "https://media.gettyimages.com/id/154894446/photo/green-meadow-field-under-a-blue-sky-with-clouds.jpg?s=612x612&w=gi&k=20&c=pa0u0lLy2V0TSyciQi1hPzIPy2rfaWdt6SFwh1FhMv4=",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-50YDESRBvjd9fUQbuFdNTfOlzsuUxJWNZv-spV7WI4OC_0jNZQSX0JQ7tun8keRmvDE&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mlBcpy9d-_y9w8KV10Z5YIET9vS1giam1BRcDa9rkCO0gKJ4jvvSnlfi736zgXEqZgQ&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTujiw836ZqRT9OQdtPMBY6FWqYfddi3E1On8dWZn1R8y-YZwfdQB4V9iEFbdI5u1uLPek&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBuatEe1GEwOuDUsx2DoC_RnQMyufUd3-CFDeycpq-z8ZNzZomFG4y0LdmNKzMD3Q5NFU&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReFel5JKiayndJR_4BfjAgg9YtQmpf2N1oJIWarrKCQZw9kNHmcby2zrgDsPuTfOv1VrU&usqp=CAU",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT2rXvRNrqEb4_k2rxcc9IXmbqsKTSZmib7KRS_WQCFPq9xG_l3Wt49_eyEREM8kvnCBE&usqp=CAU",
    },
    {
      img: "https://www.shutterstock.com/image-photo/rural-summer-landscape-green-meadow-260nw-585631091.jpg",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFT2koFOQCuqad6bSCxpxCCqbwXJsL_lG4F1IAlXLAcA6F9p2UBDTyp5p5PHuJmkOgUEs&usqp=CAU",
    },
    {
      img: "https://www.shutterstock.com/image-photo/beautiful-meadow-field-fresh-grass-600nw-1705525927.jpg",
    },
    {
      img: "https://media.istockphoto.com/id/1401321751/photo/beautiful-creative-background-image-on-spring-or-summer-theme.jpg?s=170667a&w=0&k=20&c=B3v6bkP-E69HV01bh3fh6NhxtcaLrj13jUtEWY6YTQs=",
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYtfhks0xeCSCCC6aJ6Nsonj6IC58oV_xiom5CLjxAqygKgH3PfWfQeCx6GBBSwuPRTuE&usqp=CAU",
    },
  ];
  return (
    <>
      {img && (
        <div className="eror">
            <h1>Enjoy the view.</h1>
          {eror.map((item) => (
            <div className="">
              <img src={item.img} alt=""/>
            </div>
          ))}
        </div>
      )}

      <div id="divr">
        <div
          id="div"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <div>
            <h1>our affairs</h1>
            <p>
              This is our work, if you want, you can use it too, you will
              definitely like it, high quality growth is guaranteed, we can
              plant the grass that has already grown or we can grow it from
              scratch wherever you want.
            </p>
            <button className="btn-3d" onClick={a}>
              try
            </button>
          </div>
          <img
            src="https://www.shutterstock.com/image-photo/common-garss-sunlight-cochin-kerala-260nw-1251150406.jpg"
            alt=""
          />
        </div>
        <div id="div" data-aos="zoom-out">
          <img
            src="https://m.media-amazon.com/images/I/61zFZLNXLUL.jpg"
            alt=""
          />
          <div>
            <h1>sown lawns</h1>
            <p>
              Our sown grass will grow in about a week and then it will make you
              happy. I think everyone will like it.
            </p>
            <a href="https://www.youtube.com/shorts/Dh0jCwq7JIM?feature=share">
              <button class="btn-whimsical">try</button>
            </a>
          </div>
        </div>
        <div id="div" data-aos="zoom-out-right">
          <div>
            <h1>ready lawns</h1>
            <p>
              Ready-made grass adapts to the ground very quickly, which means it
              hardens quickly and makes you feel even more relaxed.
            </p>
            <button class="button-3d" onClick={() => setImg(true)}>
              try
            </button>
          </div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyICoGlPYaEQSHW7BoYdaqYtc0UsobXmLnoA&s"
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Sviper;
