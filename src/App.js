import PageLayout from "./PageLayout";
import "./styles.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
const layouts = {
  xxl: [
    { i: "l1", x: 1, y: 0, w: 3, h: 2, resizeHandles: ["e"] },
    { i: "m1", x: 4, y: 0, w: 4, h: 2 },
    { i: "r1", x: 8, y: 0, w: 3, h: 2 },
    {
      i: "l2",
      x: 1,
      y: 3, //即使大于2，也会向上吸附
      w: 5,
      h: 3
    },
    {
      i: "r2",
      x: 6,
      y: 3,
      w: 5,
      h: 3,
      static: true // 如果要通过y指定间距，需要添加static:true
    }
  ],
  xl: [
    { i: "l1", x: 1, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
    { i: "m1", x: 3, y: 0, w: 4, h: 2 },
    { i: "r1", x: 7, y: 0, w: 2, h: 2 },
    { i: "l2", x: 1, y: 2, w: 4, h: 3 },
    { i: "r2", x: 5, y: 2, w: 4, h: 3 }
  ],
  lg: [
    { i: "l1", x: 1, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
    { i: "m1", x: 3, y: 0, w: 2, h: 2 },
    { i: "r1", x: 5, y: 0, w: 2, h: 2 },
    { i: "l2", x: 1, y: 2, w: 3, h: 3 },
    { i: "r2", x: 4, y: 2, w: 3, h: 3 }
  ],
  md: [
    { i: "l1", x: 0, y: 0, w: 2, h: 2, resizeHandles: ["e"] },
    { i: "m1", x: 2, y: 0, w: 2, h: 2 },
    { i: "r1", x: 4, y: 0, w: 2, h: 2 },
    { i: "l2", x: 0, y: 2, w: 3, h: 3 },
    { i: "r2", x: 3, y: 2, w: 3, h: 3 }
  ],
  sm: [
    { i: "l1", x: 0, y: 0, w: 1, h: 2, resizeHandles: ["e"] },
    { i: "m1", x: 1, y: 0, w: 2, h: 2 },
    { i: "r1", x: 3, y: 0, w: 1, h: 2 },
    { i: "l2", x: 0, y: 2, w: 2, h: 3 },
    { i: "r2", x: 2, y: 2, w: 2, h: 3 }
  ],
  xs: [
    {
      i: "l1",
      x: 0,
      y: 0,
      w: 2,
      h: 2,
      resizeHandles: ["s"] // 利用断点可以配置个性化的 resizeHandles
    },
    { i: "m1", x: 0, y: 2, w: 2, h: 2 },
    { i: "r1", x: 0, y: 4, w: 2, h: 2 },
    { i: "l2", x: 0, y: 7, w: 2, h: 3 },
    { i: "r2", x: 0, y: 10, w: 2, h: 3 }
  ]
};

export default function App() {
  return (
    <>
      <PageLayout layouts={layouts}>
        <div key="l1">l1</div>
        <div key="m1">m1</div>
        <div key="r1">r1</div>
        <div key="l2">l2</div>
        <div key="r2">r2</div>
      </PageLayout>
    </>
  );
}
