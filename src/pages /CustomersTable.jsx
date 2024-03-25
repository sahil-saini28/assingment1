import { useEffect, useState } from "react";

function CustomersTable() {
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/customers");
        const data = await response.json();
        // Format dates before setting customers
        const formattedCustomers = data.map((customer) => ({
          ...customer,
          dob: formatDate(customer.dob),
          registrationDate: formatDate(customer.registrationDate),
        }));
        setCustomers(formattedCustomers);
        setLoading(false);
      } catch (error) {
        console.error("Error:", error);
        setLoading(false);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts
  console.log(customers);
  // Function to format date as YYYY-MM-DD
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-gray-200">
          <table className="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead className="ltr:text-left   rtl:text-right">
              <tr>
                <th className="whitespace-nowrap px-2 py-2 font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Email
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Activated Plan
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Date of Birth
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Aadhar No.
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Mobile No.
                </th>
                <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                  Registration Date
                </th>
              </tr>
            </thead>

            <tbody className="divide-y  divide-gray-200">
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td className="whitespace-nowrap px-6 py-2 font-medium text-gray-900">
                    {customer.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {customer.email}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {customer.plan.name}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {customer.dob}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {customer.adharNumber}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {customer.assignedMobileNumber}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2 text-gray-700">
                    {customer.registrationDate}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default CustomersTable;
