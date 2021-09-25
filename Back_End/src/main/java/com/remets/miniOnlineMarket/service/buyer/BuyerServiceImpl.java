package com.remets.miniOnlineMarket.service.buyer;

import com.remets.miniOnlineMarket.domain.*;
import com.remets.miniOnlineMarket.repository.*;
import com.remets.miniOnlineMarket.service.order.OrderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.stream.Collectors;


@Service
@Transactional
public class BuyerServiceImpl implements BuyerService {

    @Autowired
    ProductRepo productRepo;
    @Autowired
    SellerRepo sellerRepo;

    @Autowired
    OrderRepository orderRepository;

    @Autowired
    BuyerRepository buyerRepository;

    @Autowired
    CartRepo cartRepo;
    @Autowired
    ReceiptRepository receiptRepository;

    @Autowired
    ReviewRepository reviewRepository;

    @Autowired
    OrderService orderService;

    @Override
    public Optional<Buyer> getById(Long id) {
        return buyerRepository.findById(id);
    }

    @Override
    public List<Buyer> getAll() {
        return buyerRepository.findAll();
    }

    @Override
    public void deleteById(Long id) {
        buyerRepository.deleteById(id);

    }

    @Override
    public void addBuyer(Buyer buyer) {
        buyerRepository.save(buyer);
    }

    @Override
    public Set<Seller> followSeller(long buyerId, long sellerId) {
        Buyer buyer = buyerRepository.findById(buyerId).get();
        Seller seller = sellerRepo.findById(sellerId).get();
        buyer.getSellers().add(seller);
        return buyerRepository.save(buyer).getSellers();
    }

    @Override
    public Set<Seller> unFollowSeller(long buyerId, long sellerId) {
        Buyer buyer = buyerRepository.findById(buyerId).get();
        Seller seller = sellerRepo.findById(sellerId).get();
        Set<Seller> sellers = new HashSet<>();
        sellers = buyer.getSellers();
        sellers.remove(seller);
        buyer.setSellers(sellers);
        return buyerRepository.save(buyer).getSellers();
    }

    @Override
    public Receipt placeOrder(long buyerId, long productId) {
        Product product = productRepo.findById(productId).get();
        double price = product.getPrice();
        Buyer buyer = buyerRepository.findById(buyerId).get();
        Order order = new Order();
        order.setOrderStatus(OrderStatus.ORDERED);
        order.setBuyer(buyer);
        order.getProducts().add(product);
        buyer.getOrders().add(order);
        Receipt receipt = new Receipt();
        receipt.setDate(new Date());
        receipt.setTotalPrice(price);
        receipt.setProductName(product.getName());
        buyerRepository.save(buyer);
        return receipt;
    }

    @Override
    public Set<Order> getOrdersByBuyerId(long buyerId) {
        Buyer buyer = buyerRepository.findById(buyerId).get();
        return buyer.getOrders();
    }

    @Override
    public List<Product> addProductToCart(long id, Product product) {
        Buyer buyer = buyerRepository.findById(id).get();
        Cart cart = cartRepo.findCartByBuyer(buyer);
        cart.getProducts().add(product);
        return cartRepo.save(cart).getProducts();
    }

    @Override
    public List<Product> removeProductFromCart(long id, long productId) {
        Buyer buyer = buyerRepository.findById(id).get();
        Cart cart = buyer.getCart();
        Product product = cart.getProducts().stream().filter(p -> p.getProductId() == productId).collect(Collectors.toList()).get(0);
        cart.getProducts().remove(product);
        return cartRepo.save(cart).getProducts();
    }

    @Override
    public List<Product> getAllProductsInCart(long buyerId) {
        Buyer buyer = buyerRepository.findById(buyerId).get();
        return buyer.getCart().getProducts();
    }

    @Override
    public void clearCart(long buyerId) {
        Buyer buyer = buyerRepository.findById(buyerId).get();

        Cart cart = buyer.getCart();
        buyer.setCart(null);
        buyerRepository.save(buyer);

        cartRepo.deleteById(cart.getId());
    }

    @Override
    public void addReviewByBuyerId(long buyerId, Review review, long productId) {
        Product product = productRepo.findById(productId).get();
        review.setProduct(product);
        review.setApproved(false);
        reviewRepository.save(review);
    }

    @Override
    public Receipt processCart(long buyerId, long sellerId) {

        Order order = new Order();
        Set<Product> productList = new HashSet<>();
        Receipt receipt = new Receipt();
        List<Product> products = new ArrayList<>();
        double totalPrice = 0;


        Buyer buyer = buyerRepository.findById(buyerId).get();
        Seller seller =sellerRepo.findById(sellerId).get();
        products = getAllProductsInCart(buyerId);
        for (Product product : products) {
            productList.add(product);
        }

        order.setOrderStatus(OrderStatus.ORDERED);
        order.setProducts(productList);
        order.setBuyer(buyer);
        order.setSeller(seller);
        order.setBillingAddress(buyer.getAddress());
        order.setShippingAddress(buyer.getAddress());


        buyer.setPoint(buyer.getPoint() + 5);
        buyer.getOrders().add(order);

        List<Order> orderList = new ArrayList<>();
        Set<Order> sellerOrders = new HashSet<>();
        sellerOrders = seller.getOrders();
        for(Order order1: sellerOrders){
            orderList.add(order1);
        }
         sellerOrders.add(order);
         seller.setOrders(sellerOrders);

         sellerRepo.save(seller);



        totalPrice = products.stream()
                .map(p -> p.getPrice())
                .reduce(0.0, (x, y) -> x + y).doubleValue();
        receipt.setTotalPrice(totalPrice);
        receipt.setDate(new Date());


        clearCart(buyerId);
        order.setReceipt(receipt);

        buyerRepository.save(buyer);
        orderRepository.save(order);
        receiptRepository.save(receipt);
        return receipt;
    }

    @Override
    public Set<Seller> getSellers(long buyerId) {
        Buyer buyer = buyerRepository.findById(buyerId).get();
        return buyer.getSellers();
    }

    @Override
    public void createCart(long buyerId) {
        Buyer buyer = buyerRepository.findById(buyerId).get();
        Cart cart;

        if (buyer.getCart() == null) {
            cart = new Cart(buyer);
            buyer.setCart(cart);
            buyerRepository.save(buyer);
        }

    }

    @Override
    public void cancelOrder(long buyerId, long orderId) {
        Buyer buyer = buyerRepository.findById(buyerId).get();
        Order order = orderRepository.findById(orderId).get();
        buyer.getOrders().remove(order);
        orderService.cancelOrder(orderId);
        buyer.getOrders().add(order);
    }

    public Address changeShippingAddress(long buyerId, long orderId, Address address) {
        Buyer buyer = getById(buyerId).get();
        Order order = orderRepository.findById(orderId).get();
        order.setShippingAddress(address);
        orderRepository.save(order);
        return order.getShippingAddress();
    }

    public Address changeBillingAddress(long buyerId, long orderId, Address address) {
        Buyer buyer = getById(buyerId).get();
        Order order = orderRepository.findById(orderId).get();
        order.setBillingAddress(address);
        orderRepository.save(order);
        return order.getBillingAddress();
    }
}
