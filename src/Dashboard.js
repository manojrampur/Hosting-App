import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Table,
  Form,
  Navbar,
  Nav,
} from "react-bootstrap";
import {
  FaCog,
  FaBell,
  FaEnvelope,
  FaUserCircle,
  FaChartBar,
  FaTasks,
  FaUtensils,
} from "react-icons/fa";
import { MdOutlineSwitchLeft } from "react-icons/md";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
import './Dashboard.css';

Chart.register(...registerables);

const generateRandomNumbers = (count, min, max) => {
  const numbers = [];
  for (let i = 0; i < count; i++) {
    numbers.push(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return numbers;
};

const activityData = {
  labels: ["2", "5", "7", "9", "11", "13", "15", "17", "19", "21", "23", "25", "27", "29", "31", "33"],
  datasets: [
    {
      label: "Activity",
      data: [5, 14, 20, 3, 7, 3, 10, 17, 30, 10, 2, 5, 0, 10, 12, 17],
      backgroundColor: "#4bc0c0",
      barThickness: 20,
      borderRadius: 5,
      borderSkipped: false,
    },
  ],
};

const Dashboard = () => {
  return (
    <Container fluid className="p-0 d-flex flex-column vh-100">
      <Row noGutters className="flex-grow-1">
        {/* Sidebar */}
        <Col
          md={2} lg={2}
          className="bg-dark text-light p-3 d-flex flex-column align-items-start vh-100"
          style={{ minWidth: "200px" }} // Optional: Set a minimum width for the sidebar
        >
          <div className="mb-4">
            <h2 className="text-light">Logo</h2>
          </div>
          <ul className="nav flex-column w-100">
            <li className="nav-item mb-3">
              <a
                href="#"
                className="nav-link text-light d-flex align-items-center"
              >
                🏠 Dashboard
              </a>
            </li>
            <li className="nav-item mb-3">
              <a
                href="#"
                className="nav-link text-light d-flex align-items-center"
              >
                📦 Orders
              </a>
            </li>
            <li className="nav-item mb-3">
              <a
                href="#"
                className="nav-link text-light d-flex align-items-center"
              >
                📊 Analytics
              </a>
            </li>
            <li className="nav-item mb-3">
              <a
                href="#"
                className="nav-link text-light d-flex align-items-center"
              >
                💬 Messages
              </a>
            </li>
            <li className="nav-item mb-3">
              <a
                href="#"
                className="nav-link text-light d-flex align-items-center"
              >
                🔧 Settings
              </a>
            </li>
          </ul>
          <div className="mt-auto">
            <MdOutlineSwitchLeft className="text-light" size={30} />
          </div>
        </Col>

        {/* Main Content */}
        <Col md={6} lg={10} className="p-0 bg-secondary d-flex flex-column">
          {/* Navbar */}
          <Navbar
            bg="dark"
            variant="dark"
            expand="lg"
            className="navbar-custom mb-4"
            style={{ height: "70px" }} // Adjust height as needed
          >
            <Navbar.Brand href="#home"></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="d-flex justify-content-between align-items-center"
            >
              {/* Search Form */}
              <Form inline className="d-flex flex-grow-1 mr-3">
                <Form.Control
                  type="text"
                  placeholder="Search"
                  className="mr-2"
                  style={{ width: "300px" }}
                />
              </Form>
              {/* Navigation Links */}
              <Nav className="d-flex align-items-center">
                <Nav.Link href="#cog" className="text-light">
                  <FaCog size={24} />
                </Nav.Link>
                <Nav.Link href="#bell" className="text-light">
                  <FaBell size={24} />
                </Nav.Link>
                <Nav.Link href="#envelope" className="text-light">
                  <FaEnvelope size={24} />
                </Nav.Link>
                <Nav.Link href="#user" className="text-light">
                  <FaUserCircle size={24} />
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <h1 className="text-white p-3">Dashboard</h1>

          <Row className="p-2 mb-0 flex-grow-1">
            <Col md={2}>
              <Card className="bg-dark text-light p-1 mb-0 pointer d-flex flex-column justify-content-between">
                <FaTasks size={24} className="mr-3" />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <div>
                    <Card.Text>Total Orders</Card.Text>
                    <Card.Text>
                      <h2>75</h2>
                      <span className="text-success">▲ 3%</span>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="bg-dark text-light p-1 mb-0 pointer d-flex flex-column justify-content-between">
                <FaChartBar size={24} className="mr-3" />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <div>
                    <Card.Text>Total Delivered</Card.Text>
                    <Card.Text>
                      <h2>70</h2>
                      <span className="text-danger">▼ 3%</span>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="bg-dark text-light p-1 mb-0 pointer d-flex flex-column justify-content-between">
                <FaTasks size={24} className="mr-3" />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <div>
                    <Card.Text>Total Cancelled</Card.Text>
                    <Card.Text>
                      <h2>05</h2>
                      <span className="text-success">▲ 3%</span>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={2}>
              <Card className="bg-dark text-light p-1 mb-0 pointer d-flex flex-column justify-content-between">
                <FaChartBar size={24} className="mr-3" />
                <Card.Body className="d-flex flex-column justify-content-center">
                  <div>
                    <Card.Text>Total Revenue</Card.Text>
                    <Card.Text>
                      <h2>$12k</h2>
                      <span className="text-danger">▼ 3%</span>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card className="bg-dark text-light p-1 pointer d-flex flex-column justify-content-between">
                <Card.Body className="d-flex align-items-center">
                  <div className="d-flex align-items-center">
                    <div>
                      <Card.Text>Net Profit</Card.Text>
                      <Card.Text>
                        <h1>$6759.25</h1>
                      </Card.Text>
                    </div>
                    <div
                      style={{
                        width: "120px",
                        height: "100px",
                        marginLeft: "72px",
                      }}
                    >
                      <CircularProgressbar
                        value={70}
                        text={`70% \nGoal \nCompleted`}
                        styles={buildStyles({
                          textSize: "10px",
                          marginBottom: "80px",
                          pathColor: "#4bc0c0",
                          textColor: "#fff",
                          trailColor: "#3e3e3e",
                        })}
                      />
                    </div>
                  </div>
                </Card.Body>
                <div className="mt-3">
                  <span className="text-success">▲ 3%</span>
                </div>
              </Card>
            </Col>
          </Row>

          <Row className="p-2 mb-0 flex-grow-1">
            <Col lg={8} xs={12} className="d-flex flex-column">
              <Card className="bg-dark text-light p-0 mb-0 pointer flex-grow-1">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>Activity</Card.Title>
                  <div style={{ width: "100%", height: "200px" }}>
                    <Bar
                      data={activityData}
                      options={{
                        scales: {
                          x: {
                            ticks: {
                              color: "#fff",
                            },
                            barPercentage: 2,
                            categoryPercentage: 0.5,
                          },
                          y: {
                            ticks: {
                              color: "#fff",
                            },
                            min: 0,
                            max: 30,
                          },
                        },
                        plugins: {
                          legend: {
                            labels: {
                              color: "#fff",
                            },
                          },
                        },
                      }}
                    />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={4} xs={12} className="d-flex flex-column">
              <Card className="bg-dark text-light p-0 mb-0 pointer flex-grow-1">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between align-items-center py-2">
                      <FaUtensils className="mr-2" />
                      <span>Goals</span>
                      <span className="text-info border border-light rounded-circle p-2 pointer"></span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center py-2">
                      <FaUtensils className="mr-2" />
                      <span>Popular Dishes</span>
                      <span className="text-info border border-light rounded-circle p-2 pointer"></span>
                    </li>
                    <li className="d-flex justify-content-between align-items-center py-2">
                      <FaUtensils className="mr-2" />
                      <span>Menus</span>
                      <span className="text-info border border-light rounded-circle p-2 pointer"></span>
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="p-3 mb-4 flex-grow-1">
            <Col lg={6} xs={12} className="d-flex flex-column">
              <Card className="bg-dark text-light p-1 mb-1 pointer flex-grow-1">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>Recent Orders</Card.Title>
                  <Table bordered hover variant="dark" responsive>
                    <thead>
                      <tr>
                        <th>Customer</th>
                        <th>Order No.</th>
                        <th>Amount</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src="https://randomuser.me/api/portraits/men/1.jpg"
                            alt="avatar"
                            className="rounded-circle mr-2"
                            width="30"
                            height="30"
                          />
                          &nbsp;Wade Warren
                        </td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td className="bg-success text-white">Delivered</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src="https://randomuser.me/api/portraits/women/1.jpg"
                            alt="avatar"
                            className="rounded-circle mr-2"
                            width="30"
                            height="30"
                          />
                          &nbsp;Jane Cooper
                        </td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td className="bg-success text-white">Delivered</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src="https://randomuser.me/api/portraits/men/2.jpg"
                            alt="avatar"
                            className="rounded-circle mr-2"
                            width="30"
                            height="30"
                          />
                          &nbsp;Guy Hawkins
                        </td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td className="bg-danger text-white">Cancelled</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src="https://randomuser.me/api/portraits/women/2.jpg"
                            alt="avatar"
                            className="rounded-circle mr-2"
                            width="30"
                            height="30"
                          />
                          &nbsp;Kristin Watson
                        </td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td className="bg-warning text-dark">Pending</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src="https://randomuser.me/api/portraits/men/3.jpg"
                            alt="avatar"
                            className="rounded-circle mr-2"
                            width="30"
                            height="30"
                          />
                          &nbsp;Cody Fisher
                        </td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td className="bg-success text-white">Delivered</td>
                      </tr>
                      <tr>
                        <td className="d-flex align-items-center">
                          <img
                            src="https://randomuser.me/api/portraits/women/3.jpg"
                            alt="avatar"
                            className="rounded-circle mr-2"
                            width="30"
                            height="30"
                          />
                          &nbsp;Savannah Nguyen
                        </td>
                        <td>15478256</td>
                        <td>$124.00</td>
                        <td className="bg-success text-white">Delivered</td>
                      </tr>
                    </tbody>
                  </Table>
                </Card.Body>
              </Card>
            </Col>

            <Col lg={5.2} xs={9} md={6} className="d-flex flex-column">
              <Card className="bg-dark text-light p-1 mb-1 pointer flex-grow-1">
                <Card.Body className="d-flex flex-column justify-content-between">
                  <Card.Title>Customer's Feedback</Card.Title>
                  <div>
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/2.jpg"
                        alt="avatar"
                        className="rounded-circle mr-2"
                        width="30"
                        height="30"
                      />
                      <div>
                        <div>Jenny Wilson</div>
                        <div className="text-warning">★★★★★</div>
                      </div>
                    </div>
                    <p>
                      The food was excellent and so was the service. I had the mushroom risotto with scallops which was awesome...
                    </p>
                    <hr />
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="https://randomuser.me/api/portraits/women/1.jpg"
                        alt="avatar"
                        className="rounded-circle mr-2"
                        width="30"
                        height="30"
                      />
                      <div>
                        <div>Dianne Russell</div>
                        <div className="text-warning">★★★★</div>
                      </div>
                    </div>
                    <p>
                      We enjoyed the Eggs Benedict served on homemade focaccia bread and hot coffee. Perfect service
                    </p>
                    <hr />
                    <div className="d-flex align-items-center mb-3">
                      <img
                        src="https://randomuser.me/api/portraits/men/1.jpg"
                        alt="avatar"
                        className="rounded-circle mr-2"
                        width="30"
                        height="30"
                      />
                      <div>
                        <div>Devon Lane</div>
                        <div className="text-warning">★★★★</div>
                      </div>
                    </div>
                    <p>
                      Normally wings are wings, but theirs are lean meaty and tender.
                    </p>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
