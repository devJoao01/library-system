<template>
    <div class="container-fluid box-content">
        <div class="container">
            <div class="content">
                <div class="box-image">
                    <img src="../static/user.jpg" alt="">
                </div>
                <div class="page-apresentation">
                    <div class="title">
                        <h2>SEUS LIVROS</h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-4" v-for="(card, index) in cards" :key="index">
                            <div class="card">
                                <div class="card-thumb">
                                    <img src="../static/book.jpeg" alt="book">
                                </div>
                                <div class="card-body">
                                    <p v-html="card.body"></p>
                                    <span class="mb-3 d-block" style="font-weight: 700;">DATA DE ENTREGA: 12/04/2025</span>
                                    <div class="status">
                                        <span>voce esta com este livro</span>
                                    </div>
                                    <button class="btn btn-danger mt-2 w-100">DEVOLVER</button>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            cards: []
        };
    },
    async created() {
        try {
            const response = await this.$axios.$get('https://jsonplaceholder.typicode.com/posts');
            this.cards = response.slice(0, 2);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
}
</script>


<style scoped lang="scss">
.box-content {
    position: relative;
    z-index: 1;

    &::before {
        content: '';
        position: absolute;
        background-color: #efefef;
        height: 150px;
        width: 100%;
        right:0;
        z-index: -1;
    }

    .content {

        .box-image {
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                border-radius: 50%;
                display: block;
                width: 200px;
                height: auto;
                box-shadow: 0 0 6px rgba(0, 0, 0, .3);
            }
        }
    }

    .card{
        border: none;

        .card-thumb{
            display: flex;
            justify-content: center;
            margin-bottom: 20px;
        }

        .card-body{
            .status{
                span{
                    display: block;
                    padding: 3px;
                    text-align: center;
                    border-radius: 30px;
                    color: #fff;
                    background-color: #008000;
                }
            }
        }
    }
}
</style>