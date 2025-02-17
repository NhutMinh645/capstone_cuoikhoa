import { z,  } from "zod";

export const registerSchema = z.object ({
    taiKhoan: z.string({message:'vui lòng nhập tài khoản'}).min(1, {message:'vui lòng nhập tài khoản'}),
    matKhau: z.string( {message:'vui lòng nhập mật khẩu'}).min(1, {message:'vui lòng nhập mật khẩu '}),
    email: z.string({message:'vui lòng nhập email'})
    .min(1, {message:'vui lòng nhập email'})
    .email ({message:'vui lòng nhập đúng định dạng email'}),

    soDt: z.string({message:'vui lòng nhập số điện Thoại'}).min(1, {message:'vui lòng nhập số điện thoại'}),
    maNhom: z.string({message:'vui lòng nhập mã nhóm'}).min(1, {message:'vui lòng nhập mã nhóm'}),
    hoTen: z.string({message:'vui lòng nhập họ tên'}).min(1, {message:'vui lòng nhập họ tên'})
})

export type registerSchemaType = z.infer<typeof registerSchema>