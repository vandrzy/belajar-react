import { useState } from "react";
import AuthForm from "../components/AuthForm";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import useRegister from "../hooks/useRegister";
import { type SignUpPayload } from "../type/Auth";

type ModalState = {
  type: "success" | "error";
  message: string;
  timestamps: string;
  data?: {
    username: string;
    email: string;
  };
};

const Register = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalState | null>(null);
  const registerMutation = useRegister();

  const handleSubmit = async (data: SignUpPayload, resetForm: () => void) => {
    try {
      const response = await registerMutation.mutateAsync(data);
      setModalData({
        type: "success",
        message: response.message,
        timestamps: response.timestamps,
        data: response.data,
      });
      resetForm();
    } catch (error: any) {
      setModalData({
        type: "error",
        timestamps: error.response?.data?.timestamps,
        message: error.response?.data?.message ?? "ada yang salah",
      });
    } finally {
      setIsOpen(true);
    }
  };

  return (
    <div className="">
      <Navbar />
      <AuthForm mode="signup" onSubmit={handleSubmit}>
        <AuthForm.Username />
        <AuthForm.Email />
        <AuthForm.Password />
        <AuthForm.ConfirmPassword />
        <AuthForm.Submit />
      </AuthForm>
      <Modal isOpen={isOpen} closeModal={() => setIsOpen(false)}>
        <h2>{modalData?.type}</h2>
        <p>{modalData?.timestamps}</p>
        <p>{modalData?.message}</p>
        {modalData?.type === "success" && (
          <div>
            <p>{modalData.data?.email}</p>
            <p>{modalData.data?.username}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Register;
