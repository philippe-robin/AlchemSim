import client from "./client";
import type { Mesh, MeshGenerateRequest, TaskResponse } from "@/types/api";

export async function generateMesh(
  simulationId: string,
  params: MeshGenerateRequest,
): Promise<TaskResponse> {
  const { data } = await client.post<TaskResponse>(
    `/simulations/${simulationId}/mesh/generate`,
    params,
  );
  return data;
}

export async function getMesh(simulationId: string): Promise<Mesh> {
  const { data } = await client.get<Mesh>(
    `/simulations/${simulationId}/mesh`,
  );
  return data;
}

export async function downloadMesh(simulationId: string): Promise<Blob> {
  const { data } = await client.get<Blob>(
    `/simulations/${simulationId}/mesh/download`,
    { responseType: "blob" },
  );
  return data;
}

export async function getMeshPreview(simulationId: string): Promise<Blob> {
  const { data } = await client.get<Blob>(
    `/simulations/${simulationId}/mesh/preview`,
    { responseType: "blob" },
  );
  return data;
}
