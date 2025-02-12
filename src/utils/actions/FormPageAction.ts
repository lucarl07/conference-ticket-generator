import type { ActionFunctionArgs } from "react-router-dom"
import { redirect } from "react-router-dom"

const FormPageAction = async ({ request, params }: ActionFunctionArgs) => {
  const formData = await request.formData()

  const avatar = "images/image-avatar.jpg" // for now we won't do this one
  const name = formData.get('name')!.toString()
  const email = formData.get('email')!.toString()
  const github = formData.get('github')!.toString()

  sessionStorage.setItem('avatar', avatar)
  sessionStorage.setItem('name', name)
  sessionStorage.setItem('email', email)
  sessionStorage.setItem('github', github)

  return redirect('/ticket')
}

export default FormPageAction;