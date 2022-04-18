import * as React from "react";
import { Helmet } from "react-helmet";

<Helmet>
  <link
    rel="stylesheet"
    href="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css"
  />
  <script
    async
    src="https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js"
  ></script>
  <div
    id="snipcart"
    data-config-modal-style="side"
    data-api-key="ZjQ4MmRmMzItNmIyNi00ZjM5LWEzODEtYWI1ZDdjNDg4NTk1NjM3ODU4ODU3NjU2OTE4ODIx"
    hidden
    data-autopop="true"
  ></div>
</Helmet>;

const trial = () => {
  return (
    <div>
      <button
        class="snipcart-add-item"
        data-item-id="2"
        data-item-name="Bacon"
        data-item-price="3.00"
        data-item-weight="20"
        data-item-url="http://localhost:8000/trial"
        data-item-description="Some fresh bacon"
      >
        Buy bacon
      </button>
    </div>
  );
};

export default trial;
