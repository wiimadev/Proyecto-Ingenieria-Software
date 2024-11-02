import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { AuthProvider } from "./context/authContext";
import { ProtectedRoute } from "./routes";

import { ChatProvider } from "./context/chatContext";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { LoginPage } from "./pages/LoginPage";
import { TasksPage } from "./pages/TasksPage";
import { TaskProvider } from "./context/tasksContext";
import { GenerarCuentasProvider } from "./context/generarCuentasContext";
import Home from "./pages/Home";
import FileUploadForm from "./pages/GenerarCuentas";
import { Administracion } from "./pages/Administracion";
// import Register from "./pages/RegisterPage";
import Profile from "./pages/Profile";
import ProfileDocente from "./pages/ProfileDocente";
import ProfileCoordinador from "./pages/ProfileCoordinador";
import ProfileJefe from "./pages/ProfileJefe";
import { DocenteProvider } from "./context/docenteContext";
import AgregarDocenteFormulario from "./pages/AgregarDocentes";
import RestablecerContra from "./pages/RestablecerContra";
import { CambioContraProvider } from "./context/cambioContraContext";

import Sec from "./pages/Sec";
import Messanger from "./pages/messanger/Messanger";

function App() {
  return (
    <AuthProvider>
      <TaskProvider>
        <GenerarCuentasProvider>

        <DocenteProvider>
        <CambioContraProvider>
        <ChatProvider>
          <BrowserRouter>
            <main className="container content-container mx-auto px-10 md:px-0">
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />


                <Route path="/chat" element={<Messanger />} />


                <Route path="/secciones" element={<Sec />} />
               
                
                <Route element={<ProtectedRoute />}>
                  <Route path="/tasks" element={<TasksPage />} />
                  <Route path="/add-task" element={<TaskFormPage />} />
                  <Route path="/tasks/:id" element={<TaskFormPage />} />
                  <Route path="/generar" element={<FileUploadForm />} />
                  <Route path="/profile" element={<Profile/>} />
                  <Route path="/register" element={<RegisterPage />} />
                  <Route path="/administracion" element={<Administracion />} />
                  <Route path="/profileDocente" element={<ProfileDocente />} />
                  <Route path="/profileCoordinador" element={<ProfileCoordinador />} />
                  <Route path="/profileJefe" element={<ProfileJefe />} />
                  <Route path="/agregarDocentes" element={<AgregarDocenteFormulario />} />
                  <Route path="/cambioContra" element={<RestablecerContra />} />
                  
                </Route>
              </Routes>
            </main>
          </BrowserRouter>
          </ChatProvider>
          </CambioContraProvider>
          </DocenteProvider>
        </GenerarCuentasProvider>
      </TaskProvider>
    </AuthProvider>
  );
}

export default App;
