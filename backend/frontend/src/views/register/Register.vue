<template>
    <div class="register-containel">
        <div class="register-panel">
            <div class="logo">
                <Logo sysName="No account? Sign up now" />
            </div>
            <div class="text">
                <input v-model="act" class="act" placeholder="Register Account" />
            </div>
            <div class="text">
                <input v-model="name" class="act" placeholder="Username" />
            </div>
            <div class="text">
                <input v-model="pwd" class="pwd" type="password" placeholder="Enter Password" />
            </div>
            <div class="text">
                <input v-model="pwdConfirm" class="pwd" type="password" placeholder="Confirm Password" />
            </div>
            <div>
                <span class="register-btn" @click="registerFunc">Sign Up Now</span>
            </div>
            <div class="tip">
                <p>Already have an account? <span class="no-act" @click="toDoLogin">Return to Login</span></p>
            </div>
        </div>
    </div>
</template>

<script>
const DELAY_TIME = 1300;
import request from "@/utils/request.js";
import md5 from "js-md5";
import Logo from "@/components/Logo.vue";

export default {
    name: "Register",
    components: { Logo },
    data() {
        return {
            act: "", // Account
            pwd: "", // Password
            pwdConfirm: "", // Confirm Password
            name: "", // Username
        };
    },
    methods: {
        // Navigate back to the login page
        toDoLogin() {
            this.$router.push("/login");
        },

        async registerFunc() {
            if (!this.act || !this.pwd || !this.pwdConfirm || !this.name) {
                this.$swal.fire({
                    title: "Validation Check",
                    text: "Account, password, or username cannot be empty",
                    icon: "error",
                    showConfirmButton: false,
                    timer: DELAY_TIME,
                });
                return;
            }
            if (this.pwd !== this.pwdConfirm) {
                this.$swal.fire({
                    title: "Validation Check",
                    text: "Passwords do not match",
                    icon: "error",
                    showConfirmButton: false,
                    timer: DELAY_TIME,
                });
                return;
            }

            const hashedPwd = md5(md5(this.pwd));
            const paramDTO = { userAccount: this.act, userPwd: hashedPwd, userName: this.name };

            try {
                const { data } = await request.post(`user/register`, paramDTO);
                if (data.code !== 200) {
                    this.$swal.fire({
                        title: "Registration Failed",
                        text: data.msg,
                        icon: "error",
                        showConfirmButton: false,
                        timer: DELAY_TIME,
                    });
                    return;
                }
                // Notify success with Swal and redirect to login page
                this.$swal.fire({
                    title: "Registration Successful",
                    text: "Redirecting to login page...",
                    icon: "success",
                    showConfirmButton: false,
                    timer: DELAY_TIME,
                });

                setTimeout(() => {
                    this.$router.push("/login");
                }, DELAY_TIME);
            } catch (error) {
                console.error("Registration request error:", error);
            }
        },
    },
};

</script>

<style lang="scss" scoped>
* {
    user-select: none;
}

.register-containel {
    // background-image: url('/bag.png');
    width: 100%;
    min-height: 100vh;
    background-color: rgb(255, 255, 255);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .register-panel {
        margin: 0 auto;
        width: 293px;
        height: auto;
        padding: 40px 30px 16px 30px;
        border-radius: 10px;
        background-color: rgb(255, 255, 255);
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.06);

        .logo {
            margin: 10px 0 30px 0;
        }

        .act,
        .pwd {
            margin: 8px 0;
            height: 53px;
            line-height: 53px;
            width: 100%;
            padding: 0 8px;
            background-color: rgb(248, 248, 248);
            box-sizing: border-box;
            border: 1px solid rgb(248, 248, 248);
            border-radius: 5px;
            font-weight: 800;
            font-size: 18px;
            padding: 0 15px;
            margin-top: 13px;
        }

        .act:focus,
        .pwd:focus {
            outline: none;
            background-color: rgb(242, 243, 244);
            transition: 1.2s;
        }

        .role {
            display: inline-block;
            color: rgb(30, 102, 147);
            font-size: 14px;
            padding-right: 10px;
        }
    }

    .register-btn {
        display: inline-block;
        text-align: center;
        border-radius: 3px;
        margin-top: 20px;
        height: 43px;
        line-height: 43px;
        width: 100%;
        background-color: rgb(155, 191, 93);
        font-size: 14px !important;
        border: none;
        color: rgb(250, 250, 250);
        padding: 0 !important;
        cursor: pointer;
        user-select: none;
    }

    .tip {
        margin: 20px 0;

        p {
            padding: 3px 0;
            font-size: 14px;
            margin: 0;
            color: #647897;

            i {
                margin-right: 3px;
            }

            span {
                color: #3b3c3e;
                border-radius: 2px;
                margin: 0 6px;
            }

            .no-act:hover {
                color: #568ed7;
                cursor: pointer;
            }

        }
    }

}
</style>
