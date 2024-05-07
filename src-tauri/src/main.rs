// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_fs::init())
        .plugin(tauri_plugin_dialog::init())
        .plugin(tauri_plugin_shell::init())
        .invoke_handler(tauri::generate_handler![generate_uuid])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}

use uuid::Uuid;

#[tauri::command]
fn generate_uuid() -> String {
    Uuid::new_v4().to_string()
}
