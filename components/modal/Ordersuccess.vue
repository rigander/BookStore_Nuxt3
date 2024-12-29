<script setup>
const { getLastOrder } = useCartStore();
const { closeModalAndNavigate } = useModalStore();
const orderId = getLastOrder();
</script>

<template>
    <div @click.stop class="modal-overlay">
        <div class="modal-content">
            <h2>Your Order Successfully Created</h2>
            <p>Order ID: <strong>{{ orderId }}</strong></p>
            <div class="modal-buttons">
                <button
                    @click="closeModalAndNavigate('/', false)"
                    class="btn-return">Return to Shopping
                </button>
                <button
                    @click="closeModalAndNavigate('/orderstatus', false)"
                    class="btn-status">My Orders Status
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-content {
  width: 700px;
  height: 300px;
  background: #fff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.modal-content h2 {
  margin-bottom: 20px;
  font-size: 24px;
}

.modal-content p {
  margin-bottom: 30px;
  font-size: 18px;
  color: #555;
}

.modal-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.modal-buttons button {
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-return {
  background: #4caf50;
  color: white;
}

.btn-return:hover {
  background: #45a049;
}

.btn-status {
  background: #008cba;
  color: white;
}

.btn-status:hover {
  background: #007bb5;
}
</style>