import React, { useState } from "react";
import { Container, Text, VStack, Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, Image, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, Box } from "@chakra-ui/react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [total, setTotal] = useState(0);
  const productPrice = 100; // Example product price

  const openModal = () => {
    setIsOpen(true);
    setTotal(productPrice * quantity);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleQuantityChange = (value) => {
    setQuantity(value);
    setTotal(productPrice * value);
  };

  const handleCheckout = () => {
    // Redirect to Mercado Pago (Peru) with the total amount
    window.location.href = `https://www.mercadopago.com.pe/checkout/v1/redirect?pref_id=${total}`;
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">Your Blank Canvas</Text>
        <Text>Chat with the agent to start making edits.</Text>
        <Button colorScheme="teal" onClick={openModal}>COMPRAR</Button>
      </VStack>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Carrito de Compras</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <Image src="https://via.placeholder.com/150" alt="Product Image" />
              <Text>Precio por unidad: S/. {productPrice}</Text>
              <Box>
                <Text>Cantidad:</Text>
                <NumberInput value={quantity} min={1} onChange={handleQuantityChange}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              </Box>
              <Text>Total: S/. {total}</Text>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCheckout}>
              Pagar con Mercado Pago
            </Button>
            <Button variant="ghost" onClick={closeModal}>Cerrar</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export default Index;