export const initialState = {
    orderList: { loading: true },
    queueList: { loading: true },
    categoryList: { loading: true },
    productList: { loading: true },
    order: {
        orderItems: [],
        orderType: 'Eat in',
        paymentType: 'Pay here',
        taxPrice: 0,
        totalPrice: 0,
        itemsCount: 0,
    },
    orderCreate: { loading: true },
};