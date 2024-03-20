<template>
    <section class="container">
        <div class="form-layout">
            <form action="" method="POST" class="col-lg-6 mx-auto">
                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">Usuario</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Funcionario</button>
                    </li>
                </ul>
                <div class="title">
                    <h2>Login</h2>
                </div>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel"
                        aria-labelledby="pills-home-tab" tabindex="0">
                        <div class="form-group">
                            <label for="email">E-mail</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="E-mail"
                                autocomplete="email" />
                        </div>
                        <div class="form-group mt-2">
                            <div class="password">
                                <label for="password">Senha</label>
                                <input id="password" type="password" autocomplete="new-password"
                                    aria-describedby="smallPassword" class="form-control" placeholder="Sua Senha" />
                            </div>
                            <div id="pass-error"></div>
                        </div>
                        <div class="form-group submit mt-3" style="display: flex; align-items: center; gap: 20px;">
                            <NuxtLink to="/Catalog">
                                Entrar
                            </NuxtLink>
                            <NuxtLink to="/Register">
                                Registrar-se
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                        tabindex="0">

                        <div class="form-group">
                            <label for="Id">ID Funcionario</label>
                            <input type="Id" class="form-control" name="Id" id="Id" placeholder="ID Funcionario"
                                autocomplete="Id" />
                        </div>
                        <div class="form-group mt-2">
                            <div class="password">
                                <label for="password">Senha</label>
                                <input id="password" type="password" autocomplete="new-password"
                                    aria-describedby="smallPassword" class="form-control" placeholder="Sua Senha" />
                            </div>
                            <div id="pass-error"></div>
                        </div>
                        <div class="form-group submit mt-3" style="display: flex; align-items: center; gap: 20px;">
                            <NuxtLink to="/Painel">
                                Entrar
                            </NuxtLink>
                            <NuxtLink to="/Register">
                                Registrar-se
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>
</template>


<style scoped lang="scss">
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

.nav-pills {
    display: flex;
    justify-content: center;
    align-items: center;

    .nav-link {
        &.active {
            background-color: transparent;
            border-bottom: 2px solid #000;
            border-radius: 0;
            color: #000;
        }
    }
}

.form-group a {
    background-color: #000;
    color: #fff;
    padding: 7px 17px;
    transition: all .3s ease;
    border-radius: 3px;
    font-weight: 700;
    text-decoration: none;
}

.form-group a:hover {
    background-color: #dcdcdd;
    color: #000;
}

@media (min-width:320px) and (max-width:767px) {
    .title {
        border-bottom: 2px solid #000;
        font-size: 16px;
    }

    .form-group a {
        width: 100%;
    }
}
</style>