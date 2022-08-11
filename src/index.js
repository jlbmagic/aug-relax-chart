import c3 from "c3";

const chart = c3.generate({
  bindto: "#chart",
  size: {
    width: 1240,
    height: 480,
  },
  axis: {
    x: {
      show: true,
      type: "category",
    },
    y: {
      show: true,
    },
  },
  data: {
    keys: {
      x: "month",
      value: ["Peaches", "Bananas", "Pears"],
    },
    colors: {
      Peaches: "red",
      Bananas: "purple",
      Pears: "green",
    },
    type: "bar",
    labels: true,
    json: [
      {
        month: "Jan",
        Peaches: 327,
        Bananas: 437,
        Pears: 111,
      },
      {
        month: "Feb",
        Peaches: 555,
        Bananas: 454,
        Pears: 222,
      },
      {
        month: "Mar",
        Peaches: 242,
        Bananas: 864,
        Pears: 343,
      },
      {
        month: "Apr",
        Peaches: 222,
        Bananas: 454,
        Pears: 434,
      },
    ],
  },
});
