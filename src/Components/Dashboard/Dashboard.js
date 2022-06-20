import React from "react";
import Header from "./Header";

function Dashboard() {
  const today = new Date();
  return (
    <div>
      <div className="row">
        <div className="col-8">
          <div className="d-flex">
            <div className="px-4">
              <div
                class="border-bottom shadow border-danger border-4 pt-4"
                style={{ width: "18rem" }}
              >
                <div class="card-body">
                  <h5 class="card-title">Purchase</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {today.getDate() +
                      "-" +
                      parseInt(today.getMonth() + 1) +
                      "-" +
                      today.getFullYear()}
                  </h6>
                  <p className="fs-2 fw-bold">50,000 RS</p>
                </div>
              </div>
            </div>

            <div className="px-5">
              <div
                class="border-bottom shadow border-success border-4 pt-4"
                style={{ width: "18rem" }}
              >
                <div class="card-body">
                  <h5 class="card-title">Sell</h5>
                  <h6 class="card-subtitle mb-2 text-muted">
                    {today.getDate() +
                      "-" +
                      parseInt(today.getMonth() + 1) +
                      "-" +
                      today.getFullYear()}
                  </h6>
                  <p className="fs-2 fw-bold">80,000 RS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-5">
          <table class="table table-secondary table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colspan="2">Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
