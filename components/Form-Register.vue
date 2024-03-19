<template>
    <section class="container">
        <div class="form-layout">
            <form action="" method="POST" class="col-lg-6 mx-auto">
                <div class="title">
                    <h2>Registre-se</h2>
                </div>
                <div class="form-group">
                    <label for="name">Nome</label>
                    <input type="text" class="form-control" v-model="name" placeholder="Nome" minLength="3"
                        autocomplete="name" required />
                </div>
                <div class="form-group">
                    <label for="email">E-mail</label>
                    <input type="email" class="form-control" v-model="email" placeholder="E-mail" autocomplete="email"
                        required />
                </div>
                <div class="form-group">
                    <div class="password">
                        <label for="password">Senha</label>
                        <input id="password" type="password" autocomplete="new-password"
                            aria-describedby="smallPassword" class="form-control" placeholder="Senha" />
                    </div>
                    <div id="pass-error"></div>
                </div>
                <div class="form-group">
                    <label for="user-type">Tipo de Cadastro</label>
                    <select v-model="userType" class="form-control" required>
                        <option value="">Selecione o tipo de usuário</option>
                        <option value="cliente">Cliente</option>
                        <option value="funcionario">Funcionário</option>
                    </select>
                </div>
                <div class="form-group" v-if="userType === 'funcionario'">
                    <label for="funcionario-id">ID do Funcionário</label>
                    <input type="text" class="form-control" required v-model="funcionarioId"
                        placeholder="ID do Funcionário" />
                </div>
                <div class="form-group">
                    <label for="tel">Telefone</label>
                    <input type="tel" v-model="tel" class="form-control" placeholder="Telefone" minLength="14"
                        autocomplete="tel" required />
                </div>
                <div class="form-group submit">
                    <button type="submit">Registre-se</button>
                </div>
            </form>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            email: '',
            userType: '',
            funcionarioId: '',
            tel: '',
            message: ''
        }
    },
    methods: {
        toggleFuncionarioField() {
            if (this.userType === 'funcionario') {
                return
            }
        }
    }
}
</script>

<style scoped>
.title {
    font-size: 20px;
    text-align: center;
    display: inline-block;
}

form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.form-layout {
    background: #fff;
    box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
    border-radius: 10px;
    padding: 120px 0;
}

.form-group button {
    background-color: #000;
    color: #fff;
    padding: 7px 17px;
    transition: all .3s ease;
    border-radius: 3px;
    font-weight: 700;
}

.form-group button:hover {
    background-color: #dcdcdd;
    color: #000;
}

@media (min-width:320px) and (max-width:767px) {
    .title {
        border-bottom: 2px solid #000;
        font-size: 16px;
    }

    .form-group button {
        width: 100%;
    }
}
</style>