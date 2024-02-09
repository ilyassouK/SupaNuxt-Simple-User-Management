<script setup lang="ts">

type Credentials = {
  email:string
  // password:string
}
type Alert = {
  show:boolean,
  success:boolean,
  msg:string,
  title:string,
  color:string,
}
const form:Credentials = reactive({
  email: "",
  // password: undefined as string
})
const state = reactive({
  loading: false as boolean,
});
const alert:Alert = reactive({
  show:false,
  success: false,
  msg:"",
  title:"",
  color:"",
})

const validate = () => {
  const errors = []
  if (!form.email) errors.push({ path: 'email', message: 'Required' })
  // if (!form.password) errors.push({ path: 'password', message: 'Required' })
  return errors
}
const UAlertHandler =  (success:boolean, errorMsg:string="") => {
  alert.show = true;
  alert.success = success;
  alert.title = success ? "Success": "Error";
  alert.color = success ? "primary": "red";
  if(success) return alert.msg = "Please check your email for your login link";
  alert.msg = errorMsg;
}
const supaAuth = useSupabaseClient().auth;
const authJoin = async () => {
  state.loading = true;
  alert.show = false;
  try{
    const {data, error } = await supaAuth.signInWithOtp(form)
    UAlertHandler(!error, error?.message);
  }catch(error){
    console.log(error)
  }finally {
    state.loading = false
  }
}
</script>

<template>
  <UForm :validate="validate" :state="form" class="space-y-4 " @submit="authJoin">
    <div class="text-center px-12">
      <p class="text-3xl mb-3">Welcome</p>
      <small class=" text-slate-300">Please enter your email address, and we'll send a magic login link to your inbox.</small>
    </div>
    <UFormGroup label="Email" name="email">
      <UInput size="lg" v-model="form.email" variant="none" class="bg-gray-950" icon="i-heroicons-envelope" />
    </UFormGroup>

    <!-- <UFormGroup label="Password" name="password">
      <UInput v-model="form.password" type="password" icon="i-heroicons-lock-closed" />
    </UFormGroup> -->

    <UAlert v-if="alert.show" class="text-start" :title="alert.title" :description="alert.msg" icon="i-heroicons-command-line" :color="alert.color" variant="soft" />

    <UButton :disabled="alert.success" size="lg" :loading="state.loading" trailing type="submit" block>
      Continue
    </UButton>
  </UForm>
</template>

