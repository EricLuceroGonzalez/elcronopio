// components/dynamicMdxComponents.js
import React, { lazy, Suspense } from "react";

const BarChart = lazy(() => import("./BarChartsMDX"));

export const dynamicMdxComponents = {
  SuperIndex: (props) => {
    <sup {...props}>{props.children}</sup>;
  },
  BarChart: (props) => (
    <Suspense fallback={<div>Cargando...</div>}>
      <BarChart {...props} />
    </Suspense>
  ),
  //   AnotherComponent: (props) => (
  //     <Suspense fallback={<div>Cargando...</div>}>
  //       <AnotherComponent {...props} />
  //     </Suspense>
  //   ),
};
