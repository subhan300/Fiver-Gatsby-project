import React from "react"
import "./CounterupSection.css"

function CounterupSection() {
  return (
    <section class="counterup_section">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-6">
            <div class="counterup">
              <h2>
                <span class="counter">135</span>K
              </h2>
              <p>Líneas de código</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6 ">
            <div class="counterup patients">
              <h2>
                <span class="counter">20</span>
              </h2>
              <p>Webs desarroladas</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="counterup doctor">
              <h2>
                <span class="counter">15</span>
              </h2>
              <p>Ecommerces</p>
            </div>
          </div>
          <div class="col-md-3 col-sm-6">
            <div class="counterup awards">
              <h2>
                <span class="counter">30</span>
              </h2>
              <p>Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CounterupSection
