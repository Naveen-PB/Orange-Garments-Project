
import { format } from 'date-fns';
import { Link } from 'react-router-dom';
import { getOrderStatus } from './lib/helpers/index';

const recentOrderData = [
	{
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2022-05-17T03:24:00',
		order_total: '$435.50',
		current_order_status: 'PLACED',
		shipment_address: 'Cottage Grove, OR 97424'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2022-05-14T05:24:00',
		order_total: '$96.35',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Los Angeles, CA 90017'
	},
	// Add more order data here
];

export default function RecentOrders() {
	return (
		<div className="bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1 overflow-x-auto xl:mb-20 xl:mt-5">
			<strong className="text-gray-700 font-medium">Recent Orders</strong>
			<div className="border-x border-gray-200 rounded-sm mt-3">
				<table className="min-w-full divide-y divide-gray-200">
					<thead className="bg-gray-50">
						<tr>
							<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
							<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product ID</th>
							<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Customer Name</th>
							<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Date</th>
							<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Total</th>
							<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shipping Address</th>
							<th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order Status</th>
						</tr>
					</thead>
					<tbody className="bg-white divide-y divide-gray-200">
						{recentOrderData.map((order) => (
							<tr key={order.id}>
								<td className="px-6 py-4 whitespace-nowrap">
									<Link to={`/order/${order.id}`}>{order.id}</Link>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<Link to={`/product/${order.product_id}`}>{order.product_id}</Link>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">
									<Link to={`/customer/${order.customer_id}`}>{order.customer_name}</Link>
								</td>
								<td className="px-6 py-4 whitespace-nowrap">{format(new Date(order.order_date), 'dd MMM yyyy')}</td>
								<td className="px-6 py-4 whitespace-nowrap">{order.order_total}</td>
								<td className="px-6 py-4 whitespace-nowrap">{order.shipment_address}</td>
								<td className="px-6 py-4 whitespace-nowrap">{getOrderStatus(order.current_order_status)}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
