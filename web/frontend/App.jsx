import { BrowserRouter } from "react-router-dom";
import { useTranslation, I18nContext } from "react-i18next";
import { NavigationMenu } from "@shopify/app-bridge-react";
import Routes from "./Routes";
import "../frontend/assets/App.css"
import {
  AppBridgeProvider,
  QueryProvider,
  PolarisProvider,
} from "./components";

import { DiscountProvider } from "./components";

export default function App() {
  // Any .tsx or .jsx files in /pages will become a route
  // See documentation for <Routes /> for more info
  const pages = import.meta.globEager("./pages/**/!(*.test.[jt]sx)*.([jt]sx)");
  const { t } = useTranslation();

  return (
    <PolarisProvider>
      <BrowserRouter>
        <AppBridgeProvider>
          <DiscountProvider>
          <QueryProvider>
            <NavigationMenu
              navigationLinks={[
                {
                  label: t("NavigationMenu.pageName"),
                  destination: "/pagename",
                },{
                  label: "create discount",
                  destination: "/createDiscount",
                },
              ]}
            />
            <Routes pages={pages} />
          </QueryProvider>
          </DiscountProvider>
        </AppBridgeProvider>
      </BrowserRouter>
    </PolarisProvider>
  );
}
